import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./../../components/Navbar"
import './_id.css'

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYWFAZXhhbXBsZS5jb20iLCJpZCI6MiwiaWF0IjoxNjkxNDg0OTYxfQ.QlyRvZ86J9W30upRg6SCx21VXg0vWEzgiPV7IWv3LCU'

function MenuById() {
    const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
    const { id } = useParams()
    const [data, setData] = useState(null)


    const getData = () => {
        axios.get(`http://localhost:4000/recipe/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res)
                setData(res.data.data)
                toast.success('Berhasil Detail Recipe')


            })
            .catch((err) => {
                console.log(err)
                toast.error(`${err}`)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <ToastContainer autoClose={1000} />
            <Navbar />
            <div className="mt-5">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <div
                                className="border-start"
                                style={{
                                    borderWidth: "3px !important",
                                    borderColor: "#EFC81A !important"
                                }}
                            >
                                <div className="d-flex ms-2">
                                    <img
                                        src="./../../src/assets/ainz.jpg"
                                        className="rounded-circle "
                                        alt="profile"
                                        style={{ width: 40 }}
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-column ms-4">
                                <h6 className="mb-0">
                                    <a
                                        href="#"
                                        className="text-black"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Ainz
                                    </a>
                                </h6>
                                <p className="mb-0 text-start fw-bold">10 Recipes</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column text-end">
                            <p className="mb-0">{formattedDate}</p>
                            <p className="mb-0">
                                20 Likes -<span> 2 Comments</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="title text-center mb-5">{data?.title}</h1>
                        <div className="row mb-5">
                            <div className="col" style={{ textAlign: "center" }}>
                                <img
                                    className="rounded img-fluid"
                                    src={data?.photo}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4>Ingredients</h4>
                            <div>{data?.ingredients}</div>

                        </div>
                        <div className="d-flex gap-3 mb-5">
                            <button className="icon-button-1">
                                <img src="./../../src/assets/mark.svg" alt="Gambar 1" />
                            </button>
                            <button className="icon-button-2">
                                <img src="/./../../src/assets/jempol.svg" alt="Gambar 2" />
                            </button>
                        </div>
                        <div
                            className="card py-5 border-start-0 border-end-0 border-3 mb-5"
                            style={{ borderColor: "#EFC81A !important" }}
                        >
                            <div className="d-flex align-items-center mb-5">
                                <div className="me-4">
                                    <div className="d-flex ms-2">
                                        <img
                                            src="/./../../src/assets/ainz.jpg"
                                            className="rounded-circle "
                                            alt="profile"
                                            style={{ width: 40 }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="d-flex flex-column border-end pe-4"
                                    style={{
                                        borderWidth: "3px !important",
                                        borderColor: "#EFC81A !important"
                                    }}
                                >
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-black"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Ainz kecil
                                        </a>
                                    </h6>
                                    <p className="mb-0 text-start fw-bold">20 Recipes</p>
                                </div>
                                <p className="message mb-0 ms-3">
                                    Wow, I just made this and it was delicious! thanks for sharing!
                                </p>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="me-4">
                                    <div className="d-flex ms-2">
                                        <img
                                            src="./../../src/assets/ainz.jpg"
                                            className="rounded-circle "
                                            alt="profile"
                                            style={{ width: 40 }}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="d-flex flex-column border-end pe-4"
                                    style={{
                                        borderWidth: "3px !important",
                                        borderColor: "#EFC81A !important"
                                    }}
                                >
                                    <h6 className="mb-0">
                                        <a
                                            href="#"
                                            className="text-black"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Ainz besar
                                        </a>
                                    </h6>
                                    <p className="mb-0 text-start fw-bold">15 Recipes</p>
                                </div>
                                <p className="message mb-0 ms-3">So simple and delicious!</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <form action="">
                                        <div className="mb-3">
                                            <textarea
                                                className="form-control bg-body-secondary"
                                                id="comments"
                                                rows={5}
                                                placeholder="Your comment here!"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn py-3"
                                            style={{
                                                backgroundColor: "#FFB167",
                                                color: "#FFF",
                                                paddingLeft: 40,
                                                paddingRight: 40
                                            }}
                                        >
                                            Send a comment
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footer">
                    <div className="footer-mid">
                        <div style={{ fontSize: "5vw", fontStyle: "bolder" }}>
                            Eat, Cook, Repeat
                        </div>
                        <div style={{ fontSize: "1.8vw" }}>
                            Share your best recipe by uploading here !
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span className="footer-bottom-item">Product</span>
                        <span className="footer-bottom-item">Company</span>
                        <span className="footer-bottom-item">Learn More</span>
                        <span className="footer-bottom-item">Get In Touch</span>
                    </div>
                    <div className="arkademy">@Arkademy</div>
                </div>
            </div>

        </>
    )
}

export default MenuById