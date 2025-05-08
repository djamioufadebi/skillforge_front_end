// User types
export enum UserRole {
  LEARNER = 'learner',
  TRAINER = 'trainer',
  ADMIN = 'admin'
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  bio?: string;
  language?: string;
  currency?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Course types
export enum CourseStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
  UNDER_REVIEW = 'under_review'
}

export enum CourseLevel {
  BEGINNER = 'beginner',
  INTERMEDIATE = 'intermediate',
  ADVANCED = 'advanced'
}

export interface Course {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  coverImage: string;
  price: number;
  currency: string;
  status: CourseStatus;
  level: CourseLevel;
  language: string;
  duration: number; // in minutes
  trainerId: string;
  modules: Module[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Module types
export enum ContentType {
  VIDEO = 'video',
  TEXT = 'text',
  QUIZ = 'quiz',
  ASSIGNMENT = 'assignment'
}

export interface Module {
  id: string;
  title: string;
  order: number;
  courseId: string;
  lessons: Lesson[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Lesson {
  id: string;
  title: string;
  order: number;
  moduleId: string;
  type: ContentType;
  content: string;
  duration: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

// Payment types
export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  MOBILE_MONEY = 'mobile_money',
  WALLET = 'wallet'
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

export interface Payment {
  id: string;
  amount: number;
  currency: string;
  method: PaymentMethod;
  status: PaymentStatus;
  userId: string;
  courseId: string;
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Enrollment types
export enum EnrollmentStatus {
  ACTIVE = 'active',
  COMPLETED = 'completed',
  EXPIRED = 'expired'
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  status: EnrollmentStatus;
  progress: number; // percentage
  completedLessons: string[]; // array of lesson IDs
  createdAt: Date;
  updatedAt: Date;
}

// Content types
export interface VideoContent {
  url: string;
  duration: number; // in seconds
  thumbnail?: string;
  qualities: { label: string; url: string }[];
}

export interface QuizContent {
  questions: {
    id: string;
    text: string;
    options: {
      id: string;
      text: string;
      isCorrect: boolean;
    }[];
  }[];
  passingScore: number;
}

export interface AssignmentContent {
  description: string;
  dueDate?: Date;
  resources?: { name: string; url: string }[];
}