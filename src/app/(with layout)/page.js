import Image from 'next/image'
import image1 from '@/assets/nature1.jpg';
import Categories from '../component/homepage/Categories';

export const revalidate = false;
 const HomePage=()=> {
  return (
    <main >
      <h1>homePage</h1>
      {/* <Image src={image1} width={600} height={400} placeholder='blur' alt=''></Image> */}
      {/* <Image src="/nature3.jpg" width={600} placeholder='blur'   height={200} blurDataURL='' alt=''></Image> */}
      {/* <Image src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" width={600} height={200} alt=''></Image> */}
      <Categories></Categories>
    </main>
  )
}
export default HomePage;