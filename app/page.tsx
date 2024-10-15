
"use client";
import Link from "next/link";
import Head from "next/head";

export default function Resume() {
  return (
    <div className="bg-pink-100 min-h-screen flex flex-col items-center justify-center relative">
      {/* Left and Right Shapes */}
      {/* Circle Shape */}
      <div className="absolute top-1/3 left-10 h-40 w-40 bg-red-300 rounded-full opacity-50 transform rotate-45"></div>
      <div className="absolute top-1/3 right-10 h-40 w-40 bg-red-300 rounded-full opacity-50 transform rotate-45"></div>

      {/* Rectangle Shape */}
      <div className="absolute top-20 left-16 h-24 w-12 bg-red-500 opacity-40"></div>
      <div className="absolute bottom-20 right-16 h-24 w-12 bg-red-500 opacity-40"></div>

      {/* Triangle Shape */}
      <div className="absolute top-1/4 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-red-400 opacity-40"></div>
      <div className="absolute bottom-1/4 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[100px] border-t-red-400 opacity-40"></div>

      {/* Oval Shape */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 h-32 w-48 bg-red-200 rounded-full opacity-30"></div>

      <nav className="bg-black flex text-white relative items-center justify-evenly h-20 w-full">
        <Link href={"/about.tsx"}>Home</Link>
        <Link href={"/about.tsx"}>Contact</Link>
        <Link href={"/about.tsx"}>Resume</Link>
        <Link href={"/about.tsx"}>AboutUS</Link>
      </nav>

      <div className="box1 bg-pink-200 border-4 border-red-500 p-8 rounded-md max-w-4xl mx-auto shadow-lg z-10">
        <Head>
          <title>Aiman - Personal Resume</title>
          <meta name="description" content="A simple personal resume website" />
        </Head>

        <main className="p-6">
          {/* Basic Information Section */}
          <section className="text-center my-8">
            <h1 className="text-5xl font-bold bg-red-900 text-white p-2 rounded-md hover:bg-red-800 transition-all">
              AIMAN
            </h1>
            <p className="text-2xl font-bold text-gray-900 hover:text-red-600">
              Software Engineer | CyberSecurity Analyst
            </p>
            <p className="mt-2 text-xl text-gray-900 hover:text-red-600">
              Hello! I'm a passionate Software Engineer eager to build
              user-friendly websites and applications and also a cyber security
              analyst and teacher.
            </p>
          </section>

          {/* Contact Information */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold bg-gray-800 text-white p-2 rounded-md hover:bg-red-800 transition-all">
              Contact Information
            </h2>
            <ul className="mt-4 space-y-2 text-xl font-bold text-gray-700">
              <li className="hover:text-red-600 transition-all">
                Email: aimanat2022@gmail.com
              </li>
              <li className="hover:text-red-600 transition-all">
                Phone: +92-34729629
              </li>
              <li className="hover:text-red-600 transition-all">
                GitHub:{" "}
                <a
                  href="https://github.com/aimanarshad"
                  className="text-blue-500 hover:underline"
                >
                  https://github.com/aimanarshad
                </a>
              </li>
              <li className="hover:text-red-600 transition-all">
                LinkedIn:{" "}
                <a
                  href="https://linkedin.com/in/yourprofile"
                  className="text-blue-500 hover:underline"
                >
                  linkedin.com/in/yourprofile
                </a>
              </li>
            </ul>
          </section>

          {/* Skills Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold bg-gray-800 text-white p-2 rounded-md hover:bg-red-800 transition-all">
              Skills
            </h2>
            <div className="mt-4 space-y-2 grid grid-cols-2 gap-4">
              <span className="bg-red-300 text-gray-900 p-2 rounded-md text-lg font-bold hover:bg-red-500 transition-all">
                Web development
              </span>
              <span className="bg-red-400 text-gray-900 p-2 rounded-md text-lg font-bold hover:bg-red-600 transition-all">
                Full Stack Developer
              </span>
              <span className="bg-red-400 text-gray-900 p-2 rounded-md text-lg font-bold hover:bg-red-700 transition-all">
                Cyber Security Analyst
              </span>
              <span className="bg-red-400 text-gray-900 p-2 rounded-md text-lg font-bold hover:bg-red-800 transition-all">
                Problem-solving
              </span>
              <span className="bg-red-400 text-gray-900 p-2 rounded-md text-lg font-bold hover:bg-red-900 transition-all">
                Leadership
              </span>
              <span className="bg-red-400 text-gray-900 p-2 rounded-md text-lg font-bold hover:bg-gray-900 transition-all">
                Teaching
              </span>
            </div>
          </section>

          {/* Education Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold bg-gray-800 text-white p-2 rounded-md hover:bg-red-8000 transition-all">
              Education
            </h2>
            <p className="mt-4 text-xl font-bold text-gray-700 hover:text-red-600 transition-all">
              University of Karachi, Undergraduate program of BSSE, 2023
            </p>
          </section>

          {/* Experience Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold bg-gray-800 text-white p-2 rounded-md hover:bg-red-800 transition-all">
              Experience
            </h2>
            <p className="mt-4 text-xl font-bold text-gray-700 hover:text-red-600 transition-all">
              Volunteer at Ubit event (2024)
            </p>
            <p className="mt-2 text-xl font-bold text-gray-700 hover:text-red-600 transition-all">
              Intern at Problem solving in C++: CodeAlpha (August 2024)
            </p>
          </section>

          {/* Portfolio Section */}
          <section className="my-8">
            <h2 className="text-3xl font-semibold bg-gray-800 text-white p-2 rounded-md hover:bg-red-800 transition-all">
              Portfolio
            </h2>
            <p className="mt-4 text-xl font-bold text-gray-700 hover:text-red-600 transition-all">
              Checkout my projects:{" "}
              <a
                href="https://github.com/aimanarshad"
                className="text-blue-500 hover:underline"
              >
                https://github.com/aimanarshad
              </a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
