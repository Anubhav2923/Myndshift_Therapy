import { useState } from 'react';
import { Smile, Send } from 'lucide-react';
import { useApi } from '../lib/api'; // Axios wrapper

const CheckinForm = ({ onSubmit }) => {
  const [mood, setMood] = useState(5);
  const [stress, setStress] = useState('');
  const [feelings, setFeelings] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { fetchWithAuth } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!stress) {
      setError('Please select your stress level.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetchWithAuth('/checkins', {
        method: 'POST',
        body: JSON.stringify({ mood, stress, feelings }),
      });

      const saved = res.data;
      if (onSubmit) onSubmit(saved); // update dashboard
      setMood(5);
      setStress('');
      setFeelings('');
    } catch (err) {
      console.error('❌ Check-in failed:', err);
      setError(err?.response?.data?.error || 'Failed to submit check-in.');
    } finally {
      setLoading(false);
    }
  };

  const getMoodEmoji = (val) => {
    if (val <= 2) return '😞';
    if (val <= 4) return '😐';
    if (val <= 7) return '🙂';
    return '😄';
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl"
    >
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">💙 Daily Check-in</h2>
        <p className="text-gray-500 text-sm">Take a moment to reflect on your mental wellness</p>
      </div>

      {/* Mood Slider */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          How are you feeling today?
        </label>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Very low</span>
          <span>Excellent</span>
        </div>
        <div className="relative mt-2">
          <input
            type="range"
            min="1"
            max="10"
            value={mood}
            onChange={(e) => setMood(Number(e.target.value))}
            className="w-full accent-blue-600"
            style={{
              background: 'linear-gradient(to right, red, orange, yellow, green)',
            }}
          />
          <div className="text-center mt-1 text-yellow-600 font-semibold">
            {getMoodEmoji(mood)} {mood}/10
          </div>
        </div>
      </div>

      {/* Stress Level */}
      <div className="mb-6">
        <label className="block font-medium mb-2">What’s your stress level?</label>
        <div className="flex justify-between gap-4">
          {['Low', 'Medium', 'High'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setStress(level.toLowerCase())}
              className={`w-full px-4 py-2 rounded-lg border transition ${
                stress === level.toLowerCase()
                  ? 'bg-yellow-100 border-blue-600 ring-2 ring-blue-400'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Feelings Textarea */}
      <div className="mb-6">
        <label className="block font-medium mb-2">
          What’s on your mind? <span className="text-sm text-gray-400">(Optional)</span>
        </label>
        <textarea
          value={feelings}
          onChange={(e) => setFeelings(e.target.value)}
          rows="4"
          className="w-full border rounded-lg p-3 text-sm bg-gray-50"
          placeholder="Share your thoughts, feelings, or what happened today..."
        />
        <p className="text-xs text-gray-400 mt-1">
          Your thoughts are stored locally and privately on your device.
        </p>
      </div>

      {/* Error Message */}
      {error && <div className="mb-4 text-sm text-red-500">{error}</div>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg shadow hover:brightness-105 transition"
      >
        {loading ? 'Submitting...' : <>
          <Send size={16} /> Complete Check-in
        </>}
      </button>
    </form>
  );
};

export default CheckinForm;
