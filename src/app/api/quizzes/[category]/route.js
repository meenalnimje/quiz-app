import { NextResponse } from 'next/server';
import { quizzes } from '@/lib/data';

export async function GET(request, { params }) {
  const { category } = params;
  return NextResponse.json(quizzes[category] || []);
}