import logo from '../assets/logo.png'

export default function Layout(Components) {
    return (
        <>
            <section className="h-100" style={{ 'backgroundColor': '#eee' }}>
                <div className="container-fluid py-5 h-100">

                    <div className="row mb-3">
                        <div className="col-2">
                            <img src={logo} style={{ 'width': '55px' }} alt="logo" loading="eager" />
                        </div>
                        <div className="col-8">
                            <div className="container">
                                <label className="welcome-label">Welcome <span>Naveed Siddiqui</span></label>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex h-100">
                        {/* Left Bar */}
                        <div className="col-2">
                            <div className="leftbar">
                                <div className="list-group mt-3">
                                    <a href="#" className="list-group-item list-group-item-action active">My Exercises</a>
                                    <a href="./add.html" className="list-group-item list-group-item-action">Add Exercise</a>
                                    <a href="#" className="list-group-item list-group-item-action">Profile</a>
                                    <a href="#" className="list-group-item list-group-item-action">Logout</a>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        <div className="col-8">
                            <div className="container wrapper">
                                
                                {Components.children}

                            </div>
                        </div>
                        {/* Right Bar */}
                        <div className="col-2">
                            <div className="rightbar">
                                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle shadow-4 mb-3" style={{ 'width': '150px', 'height': '150px' }}
                                    alt="Avatar" />
                                <h5 className="mb-2"><strong>Naveed Siddiqui</strong></h5>
                                <p className="text-muted">Web Developer <span className="badge bg-primary">PRO</span></p>
                                <div className="profile-detail">
                                    <div className="list-group">
                                        <a className="list-group-item active">35 Times Exercise</a>
                                        <a className="list-group-item">Run: 15 (Times)</a>
                                        <a className="list-group-item">Bicycle Ride: 18 (Times)</a>
                                        <a className="list-group-item">Swim: 2 (Times)</a>
                                        <a className="list-group-item">Walk: 0 (Times)</a>
                                        <a className="list-group-item">Hike: 0 (Times)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}