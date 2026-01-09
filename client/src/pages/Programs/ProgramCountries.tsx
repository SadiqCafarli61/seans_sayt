import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaQuoteLeft } from "react-icons/fa";
const ProgramCountries:React.FC = () => {

    type CountryProps = {
        id:number;
        country:string;
        description:string;
    }
    const lists:CountryProps[] = [
        {id:1,country:"Mina, Avstraliya",description:"“İllərdir bu mövzularla maraqlanıram, amma nə qədər bilmədiyimin fərqinə belə varmamışam. Praktik məşğələlərə qoşulmazdan əvvəl zehnimdəki boşluqları nəzəri biliklərlə doldurduğu üçün Aslıya bir daha təşəkkür etmək istəyirəm.”"},
        {id:2,country:"Aleyna, Türkiyə",description:" Bu kurs məni narahat edən suallara cavab verdi. Əvvəllər məntiq, realizm və mənəviyyat barədə çaşqınlıq hiss edirdim. Amma sən bu ikisini gözəl şəkildə birləşdirdin və bizə möhtəşəm bir şəkildə təqdim etdin."},
        {id:3,country:"Bakı, Azərbaycan",description:"Xüsusilə meditasiya və diqqətlilik məşqləri axtardığım daxili dincliyi və tarazlığı tapmaqda inanılmaz dərəcədə faydalı olub. Həqiqətən də içimdə bir şeyin oyandığını hiss etdim. Bunun bu qədər məhsuldar olacağını düşünmürdüm."}
    ]

    useEffect(() => {
Aos.init({
    duration:1000
})
    }, [])
  return (
    <div className='program__countries'>
       <div className='lists'>
{
    lists.map(list => (
        <div key={list.id} className='list__cart'>
                <div style={{
                    display:"flex",
                    margin:"0 auto",
                    alignItems:"center",
                    justifyContent:"center",
                    flexDirection:"column"
                }}>
                   <FaQuoteLeft  style={{
                    color:'#575757',
                    fontSize:"50px",
                   }} />
<h5>{list.country}</h5>
<p>{list.description}</p>
                </div>
        </div>
    ))
}
       </div>
    </div>
  )
}

export default ProgramCountries
