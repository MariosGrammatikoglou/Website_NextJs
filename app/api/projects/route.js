import { NextResponse } from 'next/server'
import projects from './data.json'

export async function GET(request){
    return NextResponse.json(projects)
}

