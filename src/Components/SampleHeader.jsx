import React from 'react';

function SampleHeader() {
  return (
    <div>
      <ul className='d-flex ps-5 list-unstyled'>
        <li className='me-3'>
        <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Eyeglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div>
        </li>
        <li className='me-3'>  <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">sunglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div></li>
        <li className='me-3'>  <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Computerglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div></li>
        <li className='me-3'>  <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Newglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div></li>
        <li  className='me-3'>  <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">kidsglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div></li>
    <li  className='me-3'>  <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Menglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div></li>
    <li  className='me-3'>
    <div className="dropdown">
      <span className="text-muted me-2" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Womenglass</span>
      <span className="dropdown-toggle">
        <i className="bi bi-chevron-down"></i>
      </span>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div>
    </li>
      </ul>
    </div>
  );
}

export default SampleHeader;
