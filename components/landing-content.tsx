"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Testimonials = [
  {
    name: "Alberto",
    avatar: "A",
    title: "Developer",
    description: "This is the best application I've used!",
  },
  {
    name: "Claudio",
    avatar: "C",
    title: "Engineer",
    description: "This is the best application I've used!",
  },
  {
    name: "Fernando",
    avatar: "F",
    title: "Designer",
    description: "This is the best application I've used!",
  },
  {
    name: "Alex",
    avatar: "A",
    title: "Q.A.",
    description: "This is the best application I've used!",
  },
  {
    name: "Gilberto",
    avatar: "G",
    title: "Analyst",
    description: "This is the best application I've used!",
  },
];

export default function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Testimonials.map((item, index) => (
          <Card key={index} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
