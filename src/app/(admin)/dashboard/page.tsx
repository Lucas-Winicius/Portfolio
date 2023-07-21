"use client"
import { redirect } from 'next/navigation';
import { hasCookie } from 'cookies-next';

export default function Dashboard() {

  if(!hasCookie(`UserToken-${process.env.USER_TOKEN_CODE}`)) {
    redirect("/login")
  }

  return (
    <>
      <h1>Painel administrativo</h1>
    </>
  )
}
