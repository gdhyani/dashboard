import { redirect } from 'next/navigation'

export default  function Home() {
  if(2==2){
    redirect('/login')
  }else{
    redirect("/user/dashboard")
  }
}
