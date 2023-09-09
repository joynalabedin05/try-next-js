import { NextResponse } from 'next/server';
import React from 'react';
import db from "@/db.json"
// import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
export const GET =(request) => {
    // console.log( request.coockies, request.headers);
    const url = new URL(request.url);
    console.log(url);
    const products = db.posts;
    return NextResponse.json(products)
}
export const POST =async (request) => {
    // console.log( request.coockies, request.headers);
    const body = await request.json();
    db.products.push(body);
    const products = db.posts;
    return NextResponse.json(products)
}