import { Psychologist } from "@/types/demo";

// Generate availability for the next 7 days
function generateAvailability(): Psychologist["availability"] {
  const slots: Psychologist["availability"] = [];
  const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

  for (let day = 1; day <= 7; day++) {
    const date = new Date();
    date.setDate(date.getDate() + day);
    const dateStr = date.toISOString().split("T")[0];

    times.forEach((time, index) => {
      slots.push({
        id: `${dateStr}-${time}`,
        date: dateStr,
        time,
        available: Math.random() > 0.3, // 70% availability
      });
    });
  }

  return slots;
}

export const mockPsychologists: Psychologist[] = [
  {
    id: "dr-emma-chen",
    name: "Dr. Emma Chen",
    title: "Clinical Psychologist",
    specialties: ["Workplace Stress", "Burnout", "Anxiety"],
    rating: 4.9,
    reviewCount: 127,
    imageUrl: "/psychologists/emma.jpg",
    bio: "Dr. Chen specializes in helping professionals manage workplace stress and prevent burnout. With 12 years of experience, she combines cognitive behavioral therapy with mindfulness techniques.",
    availability: generateAvailability(),
  },
  {
    id: "dr-marcus-johnson",
    name: "Dr. Marcus Johnson",
    title: "Licensed Therapist",
    specialties: ["Work-Life Balance", "Career Transitions", "Depression"],
    rating: 4.8,
    reviewCount: 98,
    imageUrl: "/psychologists/marcus.jpg",
    bio: "Dr. Johnson helps individuals navigate career challenges and find sustainable work-life balance. He has extensive experience working with tech professionals and executives.",
    availability: generateAvailability(),
  },
  {
    id: "dr-sarah-patel",
    name: "Dr. Sarah Patel",
    title: "Organizational Psychologist",
    specialties: ["Team Dynamics", "Leadership Stress", "Performance Anxiety"],
    rating: 4.9,
    reviewCount: 156,
    imageUrl: "/psychologists/sarah.jpg",
    bio: "Dr. Patel brings a unique perspective combining organizational psychology with individual therapy. She specializes in helping leaders manage high-pressure roles.",
    availability: generateAvailability(),
  },
  {
    id: "dr-david-kim",
    name: "Dr. David Kim",
    title: "Clinical Psychologist",
    specialties: ["Stress Management", "Sleep Issues", "Mindfulness"],
    rating: 4.7,
    reviewCount: 84,
    imageUrl: "/psychologists/david.jpg",
    bio: "Dr. Kim focuses on holistic approaches to mental wellness, integrating sleep science and mindfulness practices into his treatment plans for stress-related issues.",
    availability: generateAvailability(),
  },
  {
    id: "dr-lisa-anderson",
    name: "Dr. Lisa Anderson",
    title: "Counseling Psychologist",
    specialties: ["Remote Work Challenges", "Isolation", "Relationship Stress"],
    rating: 4.8,
    reviewCount: 112,
    imageUrl: "/psychologists/lisa.jpg",
    bio: "Dr. Anderson specializes in the unique challenges of modern work environments, including remote work isolation and maintaining professional relationships in digital spaces.",
    availability: generateAvailability(),
  },
];
