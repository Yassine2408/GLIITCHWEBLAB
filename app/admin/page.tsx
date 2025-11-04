"use client";

import { useState } from "react";
import { templates as initialTemplates, Template } from "@/data/templates";

const USER = "Yassine";
const PASS = "10203456";

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" && sessionStorage.getItem("admin-logged-in") === "true"
  );
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loginError, setLoginError] = useState("");
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    fullDescription: "",
    techStack: "",
    imageUrl: "",
    category: "",
    price: "",
    releaseDate: "",
    popularityScore: "",
  });
  const [formError, setFormError] = useState("");
  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === USER && pass === PASS) {
      sessionStorage.setItem("admin-logged-in", "true");
      setLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Incorrect username or password.");
    }
  };
  // Logout
  const logout = () => {
    sessionStorage.removeItem("admin-logged-in");
    setLoggedIn(false);
    setUser("");
    setPass("");
  };

  // Add Template handler
  const handleAddTemplate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.id || !form.name) {
      setFormError("ID and Name are required.");
      return;
    }
    setTemplates([
      {
        id: form.id,
        name: form.name,
        description: form.description,
        fullDescription: form.fullDescription,
        techStack: form.techStack.split(",").map((t) => t.trim()),
        imageUrl: form.imageUrl || undefined,
        category: form.category || "Other",
        price: form.price ? parseFloat(form.price) : 0,
        releaseDate: form.releaseDate || new Date().toISOString().split("T")[0],
        popularityScore: form.popularityScore ? parseInt(form.popularityScore) : 0,
      },
      ...templates,
    ]);
    setForm({ 
      id: "", 
      name: "", 
      description: "", 
      fullDescription: "", 
      techStack: "", 
      imageUrl: "",
      category: "",
      price: "",
      releaseDate: "",
      popularityScore: "",
    });
    setFormError("");
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted-50 dark:bg-muted-900">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-900 shadow-subtle rounded-xl p-8 border border-gray-200 dark:border-gray-800 w-full max-w-xs"
        >
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Admin Login
          </h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 mb-4"
              required
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          {loginError && <p className="text-red-500 text-sm mb-4">{loginError}</p>}
          <button type="submit" className="w-full py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center py-12 bg-muted-50 dark:bg-muted-900">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-subtle p-8 mb-10">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
          <button onClick={logout} className="text-sm text-primary-600 hover:underline">Logout</button>
        </div>
        <form onSubmit={handleAddTemplate} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="ID"
              value={form.id}
              onChange={(e) => setForm({ ...form, id: e.target.value })}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              required
            />
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Short Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
          <textarea
            placeholder="Full Description"
            value={form.fullDescription}
            onChange={(e) => setForm({ ...form, fullDescription: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            rows={2}
          />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Screenshot URL (optional)</label>
            <input
              type="url"
              placeholder="https://..."
              value={form.imageUrl}
              onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Or upload image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files && e.target.files[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setForm({ ...form, imageUrl: url });
                  }
                }}
                className="block w-full text-sm text-gray-700 dark:text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
              />
              {form.imageUrl ? (
                <div className="mt-3 aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={form.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                </div>
              ) : null}
            </div>
          </div>
          <input
            type="text"
            placeholder="Tech Stack (comma separated)"
            value={form.techStack}
            onChange={(e) => setForm({ ...form, techStack: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="date"
              placeholder="Release Date"
              value={form.releaseDate}
              onChange={(e) => setForm({ ...form, releaseDate: e.target.value })}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <input
              type="number"
              placeholder="Popularity Score (0-100)"
              value={form.popularityScore}
              onChange={(e) => setForm({ ...form, popularityScore: e.target.value })}
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              min="0"
              max="100"
            />
          </div>
          {formError && <p className="text-red-500 text-sm">{formError}</p>}
          <button type="submit" className="w-full py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
            Add Template
          </button>
        </form>
      </div>
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-subtle p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Current Templates</h2>
        <ul className="space-y-3">
          {templates.map((t) => (
            <li key={t.id} className="border-b border-gray-100 dark:border-gray-800 pb-3 mb-3 last:pb-0 last:mb-0 last:border-0">
              <div className="font-semibold text-lg text-primary-600 dark:text-primary-400">{t.name}</div>
              <div className="text-gray-700 dark:text-gray-300 text-sm">{t.description}</div>
              <div className="text-xs text-gray-500 mt-1">Tech: {t.techStack.join(", ")}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
