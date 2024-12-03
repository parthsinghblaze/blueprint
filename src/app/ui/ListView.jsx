"use client"

import React, { useState } from "react";

export default function ToggleViewComponent() {
    const [viewMode, setViewMode] = useState("list"); // "list" or "grid"
    const [viewSize, setViewSize] = useState("relaxed"); // "relaxed" or "compact"
    const [selectedRows, setSelectedRows] = useState([]); // Track selected rows

    const data = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", subject: "Meeting Schedule" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", subject: "Project Updates" },
        { id: 3, name: "Robert Brown", email: "robert.brown@example.com", subject: "Invoice #1234" },
        { id: 4, name: "Alice Johnson", email: "alice.johnson@example.com", subject: "Team Outing" },
        { id: 5, name: "Chris Lee", email: "chris.lee@example.com", subject: "New Project Discussion" },
        { id: 6, name: "Sara Wilson", email: "sara.wilson@example.com", subject: "Feedback Review" },
    ];

    const toggleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const isSelected = (id) => selectedRows.includes(id);

    return (
        <div className="p-6 space-y-6">
            {/* Header Actions */}
            <div className="flex items-center justify-between">
                {/* View Mode Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => setViewMode("list")}
                        className={`px-4 py-2 rounded ${
                            viewMode === "list"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        List View
                    </button>
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`px-4 py-2 rounded ${
                            viewMode === "grid"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Grid View
                    </button>
                </div>

                {/* View Size Buttons */}
                <div className="flex space-x-2">
                    <button
                        onClick={() => setViewSize("relaxed")}
                        className={`px-4 py-2 rounded ${
                            viewSize === "relaxed"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Relaxed
                    </button>
                    <button
                        onClick={() => setViewSize("compact")}
                        className={`px-4 py-2 rounded ${
                            viewSize === "compact"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        Compact
                    </button>
                </div>
            </div>

            {/* Content */}
            <div>
                {viewMode === "list" ? (
                    /* List View */
                    <div className="space-y-4">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className={`border rounded-lg p-4 transition ${
                                    isSelected(item.id)
                                        ? "bg-blue-50 border-blue-500"
                                        : "bg-white hover:bg-gray-50"
                                } ${viewSize === "relaxed" ? "h-20" : "h-14"} flex items-center justify-between`}
                            >
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-600 text-sm">{item.email}</p>
                                </div>
                                <input
                                    type="checkbox"
                                    className="rounded"
                                    onChange={() => toggleSelectRow(item.id)}
                                    checked={isSelected(item.id)}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Grid View */
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.map((item) => (
                            <div
                                key={item.id}
                                className={`border rounded-lg p-4 transition ${
                                    isSelected(item.id)
                                        ? "bg-blue-50 border-blue-500"
                                        : "bg-white hover:bg-gray-50"
                                } ${viewSize === "relaxed" ? "h-40" : "h-32"} flex flex-col justify-between`}
                            >
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-gray-600 text-sm">{item.email}</p>
                                    <p className="mt-2 text-gray-800 text-sm">{item.subject}</p>
                                </div>
                                <input
                                    type="checkbox"
                                    className="rounded self-end"
                                    onChange={() => toggleSelectRow(item.id)}
                                    checked={isSelected(item.id)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
