
  import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
  import { Link } from 'react-router-dom';
  
  function Breadcrumbs() {
    return (
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to="/products">Products</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Product Details</BreadcrumbItem>
      </Breadcrumb>
    );
  }

export default Breadcrumbs



