import React from 'react'

const About = () => {
  return (
    <div className="inset-0 -z-10 min-h-[86vh] w-full px-5 py-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white">
      <div className="max-w-4xl mx-auto bg-[#1e293b] rounded-2xl shadow-2xl p-8 border border-slate-600">

        <h1 className="text-4xl font-extrabold text-center text-slate-100 underline underline-offset-4 mb-6">
          About Me
        </h1>

        <p className="text-lg text-slate-300 mb-6 leading-relaxed">
          Hello! I’m <span className="font-semibold text-white">Harshal Gondane</span>, a final-year B.Tech student in Electronics and Communication Engineering at IIIT Kota.
          I’m an aspiring software developer passionate about building efficient and user-friendly web applications.
          With a strong foundation in C++ and full-stack development, I enjoy turning ideas into reality using code.
        </p>

        <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-4">Skills</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-slate-300 text-left">
  <div>
    <h3 className="font-semibold text-slate-200 underline mb-1">Languages</h3>
    <ul className="list-disc list-inside ml-2">
      <li>C++</li>
      <li>JavaScript</li>
      <li>Python</li>
      <li>C</li>
    </ul>
  </div>
  <div>
    <h3 className="font-semibold text-slate-200 underline mb-1">Frontend</h3>
    <ul className="list-disc list-inside ml-2">
      <li>HTML, CSS</li>
      <li>React</li>
      <li>Next.js</li>
      <li>Tailwind CSS</li>
    </ul>
  </div>
  <div>
    <h3 className="font-semibold text-slate-200 underline mb-1">Backend</h3>
    <ul className="list-disc list-inside ml-2">
      <li>Node.js</li>
      <li>Express.js</li>
      <li>REST APIs</li>
    </ul>
  </div>
  <div>
    <h3 className="font-semibold text-slate-200 underline mb-1">Databases</h3>
    <ul className="list-disc list-inside ml-2">
      <li>MongoDB</li>
      <li>MySQL</li>
      <li>SQL</li>
    </ul>
  </div>
  <div>
    <h3 className="font-semibold text-slate-200 underline mb-1">Tools & Platforms</h3>
    <ul className="list-disc list-inside ml-2">
      <li>Git & GitHub</li>
      <li>Firebase</li>
      <li>Postman</li>
    </ul>
  </div>
  <div>
    <h3 className="font-semibold text-slate-200 underline mb-1">Soft Skills</h3>
    <ul className="list-disc list-inside ml-2">
      <li>Problem Solving</li>
      <li>Teamwork</li>
      <li>Critical Thinking</li>
      <li>Leadership</li>
    </ul>
  </div>
</div>

        <h2 className="text-2xl font-bold text-slate-100 mt-8 mb-2">Projects</h2>
        <ul className="text-slate-300 list-disc list-inside mb-6">
          <li>
            <strong>E-Commerce Website:</strong> Built with React, Node.js & Tailwind CSS. Features product listings, search, filters, and modern UI.
          </li>
          <li>
            <strong>Portfolio Website:</strong> Personal site showcasing my skills & projects using React and Tailwind CSS.
          </li>
        </ul>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a
            href="src/Harshal-Resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            📄 Download Resume
          </a>
          <a
            href="https://github.com/harshalgondane33"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/harshalgondane20/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-400 hover:underline"
          >
            LeetCode
          </a>
          <a
            href="https://linkedin.com/in/harshal-gondane-bb55bb130/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </div>
  )
}

export default About
