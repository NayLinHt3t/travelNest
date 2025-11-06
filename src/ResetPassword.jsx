import { useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `https://underground-brittni-tripnest-82c64bf9.koyeb.app/api/auth/reset-password/${encodeURIComponent(
          token
        )}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resetToken: token, newPassword }),
        }
      );

      // Check if response is JSON
      const contentType = res.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        setError("Server error: Invalid response format");
        return;
      }

      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Failed to reset password");
      } else {
        setMessage(data?.message || "Password has been reset successfully");
      }
    } catch (err) {
      console.error("Reset password error:", err);
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Reset your password</h2>
        <form onSubmit={submit} className="space-y-4">
          <label className="block">
            <div className="text-sm mb-1">New password</div>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-3 py-2"
              placeholder="At least 6 characters"
            />
          </label>

          <label className="block">
            <div className="text-sm mb-1">Confirm password</div>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 px-3 py-2"
              placeholder="Repeat new password"
            />
          </label>

          {error && <div className="text-sm text-red-600">{error}</div>}
          {message && <div className="text-sm text-green-600">{message}</div>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-black text-white px-4 py-2 disabled:opacity-60"
            >
              {loading ? "Saving..." : "Set new password"}
            </button>

            <Link to="/" className="text-sm text-neutral-600 hover:underline">
              Back home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
