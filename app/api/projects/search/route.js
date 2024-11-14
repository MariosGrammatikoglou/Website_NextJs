import { NextResponse } from "next/server";
import projects from "../data.json"

export async function GET(request){
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query')
    const filteredProjects = projects.filter((project) => {
        return project.title.toLowerCase().includes(query.toLowerCase())
    })
    return NextResponse.json(filteredProjects)
}