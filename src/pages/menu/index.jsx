import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import { confirmAlert } from "react-confirm-alert";
import Alert from "./../../components/Alert"
import MyNavbar from "./../../components/Navbar"
import './index.css'



export default function Menu() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     const formattedDate = today.toLocaleDateString('en-US', options);
    const [data, setData] = useState(null)
    const [pagination, setPagination] = useState({ totalData: 0, totalPage: 0, pageNow: 0 })
    const [showAlert, setShowAlert] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [startData, setStartData] = useState(0)
    const [endData, setEndData] = useState(5)
    const [alertData, setAlertData] = useState({
        type: "",
        message: ""
    })

    const getData = () => {
        axios.get(`http://localhost:4000/recipe`, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then((res) => {
                console.log(res)
                setData(res.data.data)
                setPagination(res.data.pagination)
                setStartData(1 + ((currentPage - 1) * 5))
                if (currentPage === res.data.pagination.totalPage) {
                    setEndData(res.data.pagination.totalData)
                } else {
                    setEndData(5 + ((currentPage - 1) * 5))
                }
                toast.success('Berhasil Get Data')
            })
            .catch((err) => {
                console.log(err)
                toast.error(`${err}`)
            })
    }

    useEffect(() => {
        getData()
    }, [currentPage])

    const deleteData = (item) => {
        confirmAlert({
            title: 'Delete recipe ',
            message: `Are you sure you want to delete "${item.title}"`,
            buttons: [
                {
                    label: "Delete",
                    onClick: () => {
                        axios.delete(`http://localhost:4000/recipe/${item.id}`, {
                            headers: {
                                Authorization : `Bearer ${localStorage.getItem("token")}`
                            }
                        })
                            .then((res) => {
                                console.log(res)
                                getData()
                                toast.success('Berhasil hapus Data')
                                // setAlertData({ ...alertData, type: "warning", message: "berhasil hapus data" })
                                // setShowAlert(true)
                            })
                            .catch((err) => {
                                console.log(err)
                                getData()
                                toast.error(`Recipe bukan milik anda`)
                                // setAlertData({ ...alertData, type: "danger", message: err.response.data.message })
                                // setShowAlert(true)
                            })
                    }
                },
                {
                    label: "Cancel",
                    onClick: () => toast.warning('Delete Cancelled')
                }
            ]
        });

    }


    return (
        <>

            <>
                <ToastContainer autoClose={2000} />
                <MyNavbar />
                <div className="mt-5">
                    <div className="container">
                        <div className="d-flex justify-content-between mb-5">
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
                                            style={{ width: 60 }}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex flex-column ms-4">
                                    <h6 className="mb-0">
                                        <Link to="/detail-profile"
                                            className="text-black"
                                            style={{ textDecoration: "none" }}
                                        >
                                            Ainz
                                        </Link>
                                    </h6>
                                    <p className="mb-0 text-start fw-bold">{pagination.totalData} Recipes</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-end">
                                <p className="mb-0">{formattedDate}</p>
                            </div>
                        </div>
                        <div className="mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-flex gap-2">
                                        <ul
                                            className="nav border-bottom border-2"
                                            style={{ borderColor: "#EFC81A !important" }}
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active text-body-secondary fw-bold"
                                                    href="#"
                                                >
                                                    Recipes
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link text-body-secondary"
                                                    href="./detail-profile-bookmark.html"
                                                >
                                                    Bookmarked
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link text-body-secondary" href="#">
                                                    Liked
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showAlert && <Alert type={alertData.type} message={alertData.message} />}
                <div className="container">
                    {data?.map((item, index) => {
                        return (
                            <div key={item.id} className="card border-light mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-5" style={{ objectFit: 'cover' }}>
                                        <img
                                            src={item.photo}
                                            className="img-fluid rounded-start"
                                            style={{
                                                width: '100%',
                                                height: '100%'
                                            }}
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-7 ">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="mb-0">Author : {item.author}</p>
                                            <br/>
                                            <p className="mb-0">Ingredients :</p>
                                            <br/>
                                            <p className="card-text">
                                                {item.ingredients}
                                            </p>
                                            <button
                                                type="button"
                                                className="btn btn-primary btn-sm"
                                                style={{ backgroundColor: "#EFC81A" }}
                                            >
                                                10 Likes - 12 Comment - 3 Bookmark
                                            </button>
                                            <div className="btn-option">
                                                <Link to={`/update-menu/${item.id}`}>
                                                    <button className="btn btn-sm btn-primary me-3" >Edit Menu</button>
                                                </Link>
                                                <button onClick={() => deleteData(item)} className="btn btn-sm btn-danger">Delete Menu</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    })}


                    <div className="py-5 d-flex justify-content-center align-items-center">
                        <button disabled={currentPage < 2} onClick={() => { setCurrentPage(currentPage - 1) }} className="btn btn-warning me-3 px-4">Prev</button>
                        <h5 className="mb-0">Show {startData} - {endData} From {pagination.totalData}</h5>
                        < button disabled={currentPage >= pagination.totalPage} onClick={() => { setCurrentPage(currentPage + 1) }} className="btn btn-warning ms-3 px-4">Next</button>

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


        </>
    )
}