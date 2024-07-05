"use client";

import Navbar from "@/components/Navbar";
import React, { act, useState } from "react";

export default function Home() {
  const [activeCourse, setActiveCourse] = useState(1);
  const [activeTopic, setActiveTopic] = useState(2);
  const [lockedCourses, setLockedCourses] = useState(2);

  const courses = [
    {
      id: 0,
      title: "Course 1",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 1,
      title: "Course 2",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 2,
      title: "Course 3",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 3,
      title: "Course 4",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 4,
      title: "Course 5",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 5,
      title: "Course 6",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
    {
      id: 6,
      title: "Course 7",
      topics: ["Topic 1", "Topic 2", "Topic 3"],
    },
  ];

  const handleCourseClick = (index: number) => {
    if (index < lockedCourses) {
      setActiveCourse(index);
      setActiveTopic(-1);
    }
  };

  const handleTopicClick = (bigIndex: number, smallIndex: number) => {
    setActiveCourse(bigIndex);
    setActiveTopic(smallIndex);
  };
  // make a navbar
  return (
    <>
      <Navbar />

      <div className=" bg-white flex w-full mx-auto">
        <div className="flex flex-row-reverse gap-12 w-full">
          <div className="w-1/4 bg-gray-900 text-white p-4">
            <ul>
              {courses.map((course, index) => (
                <li key={course.id} className={`mb-2 `}>
                  <div
                    className={`flex items-center cursor-pointer ${
                      index === activeCourse ? " bg-gray-800 " : ""
                    }`}
                  >
                    {index >= lockedCourses && (
                      <span
                        className="mr-2"
                        onClick={() => setLockedCourses(index + 1)}
                      >
                        🔒
                      </span>
                    )}
                    {index < lockedCourses &&
                      (index == activeCourse ? (
                        <span className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="mr-2"
                          onClick={() => {
                            setLockedCourses(index - 1);
                            setActiveCourse(index - 1);
                          }}
                        >
                          🔓
                        </span>
                      ))}
                    <span onClick={() => handleCourseClick(course.id)}>
                      {course.title}
                    </span>
                  </div>
                  {course.id === activeCourse && course.topics.length > 0 && (
                    <ul className="ml-4 mt-2">
                      {course.topics.map((topic, index) => (
                        <li
                          key={index}
                          className={`cursor-pointer ${
                            activeTopic === index ? "text-orange-500" : ""
                          }`}
                          onClick={() => {
                            handleTopicClick(course.id, index);
                            console.log(activeCourse, activeTopic);
                          }}
                        >
                          {course.id + 1}.{index + 1}. {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-3/4 bg-gray-700 text-white p-4 flex items-center justify-center">
            {activeTopic >= 0 ? (
              <span className="flex flex-col items-center justify-center">
                <span>Course {activeCourse + 1}</span>
                <span> Topic {activeTopic + 1}</span>
              </span>
            ) : (
              `Course ${activeCourse + 1}`
            )}
          </div>
        </div>
      </div>
    </>
  );
}
