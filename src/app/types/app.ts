import { z } from 'zod';

// Define enums
enum Role {
  user = 'user',
  admin = 'admin'
}

enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}

// Define schema for resetPasswordRequest
const ResetPasswordRequestSchema = z.object({
  token: z.number(),
  expires: z.date(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().optional(),
  user: z.string()
});

// Define schema for userVerificationRequest
const UserVerificationRequestSchema = z.object({
  token: z.string(),
  expires: z.date(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date().optional(),
  deletedAt: z.date().optional(),
  user: z.string()
});

// Define schema for users
const UsersSchema = z.object({
  email: z.string(),
  name: z.string().optional(),
  password: z.string(),
  role: z.nativeEnum(Role),
  image: z.string().optional(),
  isVerified: z.boolean(),
  stripeId: z.string().optional(),
  sendAnonce: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  resetRequest: ResetPasswordRequestSchema.optional(),
  verification: UserVerificationRequestSchema.optional(),
  deletedAt: z.date().optional(),
  workOutLogs: z.array(z.string()),
  userExercises: z.array(z.string()),
  exercises: z.array(z.string()),
  goals: z.array(z.string())
});

// Define schema for WorkoutLog
const WorkoutLogSchema = z.object({
  userId: z.string(),
  user: z.string(),
  exerciseId: z.string(),
  notes: z.string().optional(),
  date: z.date()
});

// Define schema for Exercise
const ExerciseSchema = z.object({
  name: z.string(),
  description: z.string(),
  userId: z.string(),
  difficulty: z.nativeEnum(Difficulty),
  instructions: z.string().optional(),
  videoUrl: z.string().optional(),
  image: z.string().optional(),
  imageUrl: z.string().optional(),
  user: z.string()
});

// Define schema for UserExercise
const UserExerciseSchema = z.object({
  userId: z.string(),
  user: z.string(),
  exerciseId: z.string(),
  exercise: z.string(),
  sets: z.number(),
  reps: z.number(),
  weight: z.number(),
  notes: z.string().optional(),
  date: z.date()
});

// Define schema for Goals
const GoalsSchema = z.object({
  userId: z.string(),
  user: z.string(),
  title: z.string(),
  description: z.string(),
  deadline: z.date(),
  isSet: z.boolean(),
  isStarted: z.boolean(),
  isFailed: z.boolean(),
});

export {
  Role,
  Difficulty,
  ResetPasswordRequestSchema,
  UserVerificationRequestSchema,
  UsersSchema,
  WorkoutLogSchema,
  ExerciseSchema,
  UserExerciseSchema,
  GoalsSchema
};
