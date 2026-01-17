import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { auth, provider } from '../firebase-config'
import logo from '../assets/logo.png'
import google from '../icons/google.png'
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
const Navbar: React.FC = () => {
    type LinkProps = {
        id: number;
        url: string;
        title: string;
    }
    
    const links: LinkProps[] = [
        { id: -1, url: "/", title: "Ana Səhifə" },
        { id: 0, url: "/products", title: "Məhsul və Proqramlar" },
        { id: 1, url: "/momentum", title: "7 Gündə Momentum Qoçluq" },
        { id: 2, url: "/podcast", title: "Podcast" },
    ]
    
    const [selectedColor, setSelectedColor] = useState<string>("")
    const [open, setOpen] = useState<boolean>(false)
    const [openLoginBar, setOpenLoginBar] = useState<boolean>(false)
    
    const [user, setUser] = useState<any>(null) // İstifadəçi məlumatları üçün state

    useEffect(() => {
        // İstifadəçi login olub-olmadığını yoxlamaq üçün Firebase auth istifadə edirik
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser); // İstifadəçi varsa, user state-ni yeniləyirik
        });

        // Cleanup funksiyası
        return () => unsubscribe();
    }, []);
    
    useEffect(() => {
        const fetchSelectedLink = async () => {
            const savedLink = localStorage.getItem("selectedLink");
            if (savedLink) {
                setSelectedColor(savedLink);
            } else {
                setSelectedColor(links[0].url);
            }
        };
        fetchSelectedLink();
    }, []);

    const handleClickLink = (url: string) => {
        setSelectedColor(url);
        localStorage.setItem("selectedLink", url);
    }

    const handleLoginClick = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            console.log(user)
           navigate("/profile")
setOpenLoginBar(false)
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate()



    const handleLogout = async () => {
try {
  await signOut(auth)
   console.log("Çıxış edildi");
   window.location.reload();
} catch (error) {
  console.log(error)
}
    }
    return (
        <>
            {openLoginBar && (
                <div className='login__menu'>
                    <button onClick={() => setOpenLoginBar(false)}>X</button>
                    <div className="form">
                        <h5 style={{
                            fontSize: "42px",
                            color: '#fff',
                            fontWeight: "bold",
                        }}>Giriş Edin</h5>
                        <div className='new'>
                            <h2>Bu saytda yenisiniz?</h2>
                            <span>Qeydiyyatdan keçin</span>
                        </div>
                    </div>
                    <form action="">
                        <div style={{
                            marginTop: "30px",
                        }}>
                            {
                              user && (
                                <a onClick={() =>navigate("/profile")} className='loginButton'>
                                <img style={{
                                    width: "30px",
                                    height: "30px"
                                }} src={google} />
                                <span>Google ilə giriş edin</span>
                            </a>
                              )
                            }
                            <a onClick={handleLoginClick} className='loginButton'>
                                <img style={{
                                    width: "30px",
                                    height: "30px"
                                }} src={google} />
                                <span>Google ilə giriş edin</span>
                            </a>
                        </div>
                        <div style={{
                            marginTop: "30px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <div style={{
                                backgroundColor: "#696969",
                                width: "130px",
                                height: "1px",
                            }}>

                            </div>
                            <span style={{
                                paddingLeft: "10px"
                            }}>Və ya</span>
                            <div style={{
                                backgroundColor: "#696969",
                                width: "130px",
                                height: "1px",
                                marginLeft: "10px"
                            }}>

                            </div>
                        </div>
                        <div className='e-poct'>
                            <a className='epost__btn'>Elektron-poçtunuzla giriş edin</a>
                        </div>
                    </form>
                </div>
            )}

            {open && (
                <div className={`overlay ${open ? 'open' : ""}`}>
                    <button onClick={() => setOpen(false)}>X</button>
                    <div className="overlay__navbar">
                        {
                            links.map(link => (
                                <Link
                                    style={{
                                        color: selectedColor === link.url ? "#FF64BA" : ""
                                    }}
                                    onClick={() => handleClickLink(link.url)}
                                    to={`${link.url}`}>{link.title}</Link>
                            ))
                        }
                    </div>
                    <div style={{
                      marginTop:"25px"
                    }}>

                  
                    {
                            // Burada istifadəçi daxil oldusa, "Giriş"i "Profil"lə dəyişirik
                            user ? (
                               <div className='profile__bar '>
                                 <Link to="/profile">
                                    <i className="fa-solid fa-user"></i>
                                    <span style={{
                                      paddingLeft:"8px"
                                    }}>Profil</span>
                                </Link>
                                
                              
                               </div>
                            ) : (
                                <>
                                    <i
                                    onClick={() => setOpenLoginBar(true)}
                                     className="fa-solid fa-user"></i>
                                    <span onClick={() => setOpenLoginBar(true)}>Giriş</span>
                                </>
                            )
                        }
                          </div>
                </div>
            )}

            <div className="header__navbar">
                <div className="header">
                    <div className="left">
                        <img src={logo} style={{
                            width: "100px",
                            height: "100px"
                        }} alt="" />
                    </div>
                    <div className="bars">
                        <FaBarsStaggered style={{
                            display: open ? "none" : "flex"
                        }} onClick={() => setOpen(!open)} className='barIcon' />
                    </div>
                    <div  className="right">
                        {
                            // Burada istifadəçi daxil oldusa, "Giriş"i "Profil"lə dəyişirik
                            user ? (
                               <div className='profile__bar '>
                                 <Link to="/profile">
                                    <i className="fa-solid fa-user"></i>
                                    <span>Profil</span>
                                </Link>
                                <IoIosArrowDown color='#FF64BA' style={{
                                  marginLeft:"16px",
                                  cursor:"pointer"
                                }} />
                                   <div className='dropdown'>
<Link style={{
  borderBottom:"1px solid #fff",
  paddingBottom:"3px"
}} to={`/profile`}>Profil</Link>
<Link to={`/profile`}>Abunəliklərim</Link>
<Link to={`/profile`}>Proqramlarım</Link>

<Link to={`/profile`}>Seanslarım</Link>
<Link to={`/profile`}>Sifarişlərim</Link>
<Link onClick={handleLogout} to={``}>Çıxış</Link>

                                 </div>
                               </div>
                            ) : (
                                <>
                                    <i
                                    onClick={() => setOpenLoginBar(true)}
                                     className="fa-solid fa-user"></i>
                                    <span onClick={() => setOpenLoginBar(true)}>Giriş</span>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className="navbar">
                    {
                        links.map(link => (
                            <Link
                                style={{
                                    color: selectedColor === link.url ? "#FF64BA" : ""
                                }}
                                onClick={() => handleClickLink(link.url)}
                                to={`${link.url}`}>{link.title}</Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;
