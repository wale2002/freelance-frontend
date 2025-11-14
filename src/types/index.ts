// export type UserRole = 'client' | 'freelancer' | 'admin';

// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: UserRole;
//   skills?: string[];
//   experience?: string;
//   bio?: string;
//   location?: string;
//   hourlyRate?: number;
//   profileImage?: string;
//   pastExperiences?: any[];
//   portfolio?: any[];
// }

// export interface Project {
//   id: string;
//   title: string;
//   description: string;
//   skills: string[];
//   budget: number;
//   client: {
//     id: string;
//     name: string;
//     email: string;
//   };
//   bids?: Bid[];
//   status: 'open' | 'closed' | 'in_progress';
//   createdAt: Date;
// }

// export interface Bid {
//   id: string;
//   freelancer: {
//     id: string;
//     name: string;
//     email: string;
//     hourlyRate?: number;
//   };
//   amount: number;
//   proposal: string;
//   createdAt: Date;
// }

// export interface Message {
//   id: string;
//   text: string;
//   sender: {
//     id: string;
//     name: string;
//   };
//   timestamp: Date;
// }

// export interface Chat {
//   id: string;
//   participants: User[];
//   messages: Message[];
//   lastMessage?: Message;
//   unreadCount?: number;
// }

// export interface FreelancerMatch {
//   freelancer: {
//     id: string;
//     name: string;
//     skills: string[];
//     hourlyRate?: number;
//     bio?: string;
//   };
//   score: number;
//   reason: string;
// }

export type UserRole = "client" | "freelancer" | "admin";

export interface User {
  id: string;
  _id?: string;
  name: string;
  email: string;
  role: UserRole;
  skills?: string[];
  experience?: string;
  bio?: string;
  location?: string;
  hourlyRate?: number;
  profileImage?: string;
  pastExperiences?: Array<{
    _id?: string;
    company: string;
    duration: string;
    description: string;
  }>;
  portfolio?: Array<{
    _id: string;
    user?: string;
    images?: Array<{
      url: string;
      originalName?: string;
      _id?: string;
    }>;
    files?: Array<{
      url: string;
      originalName: string;
      _id: string;
    }>;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }>;
  githubProfile?: string;
  linkedinProfile?: string;
  portfolioWebsite?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  budget: number;
  client: {
    id: string;
    name: string;
    email: string;
  };
  bids?: Bid[];
  status: "open" | "closed" | "in_progress";
  createdAt: Date;
}

export interface Bid {
  id: string;
  freelancer: {
    id: string;
    name: string;
    email: string;
    hourlyRate?: number;
  };
  amount: number;
  proposal: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  text: string;
  sender: {
    id: string;
    name: string;
  };
  timestamp: Date;
}

export interface Chat {
  id: string;
  participants: User[];
  messages: Message[];
  lastMessage?: Message;
  unreadCount?: number;
}

export interface FreelancerMatch {
  freelancer: {
    id: string;
    name: string;
    skills: string[];
    hourlyRate?: number;
    bio?: string;
  };
  score: number;
  reason: string;
}
