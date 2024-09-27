import { Link } from "react-router-dom";
import { Print } from "../../pages/print/Print";
import { render } from "react-dom";

const click = () => {
    const el = document.createElement("div");

    render(<Print />, el);
    const printWindow = window.open('', '', 'height=400, width=800') as Window;
    printWindow.document.write('<html><head><title></title>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(el.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

export const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to={"/"}>Sudoku</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" 
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link style={{ cursor: "pointer" }} className="nav-link" aria-current="page" to={"/print"}>Print</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
};