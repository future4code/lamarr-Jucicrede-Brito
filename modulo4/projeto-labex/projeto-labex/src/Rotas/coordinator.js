export const goToBack=(navigate)=>{
    navigate(-1)
}
export const goToFormApplicPage = (navigate) => {
    navigate("/application")
}
export const goToDetailsPage = (navigate, id) => {
    navigate(`/details/trips/${id}`)
}
export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToListPage = (navigate) => {
    navigate("/list")
}

export const goToHomePage = (navigate) => {
    navigate("/")
}
 export const goToTripPage = (navigate) =>{
    navigate("/criate")
 }