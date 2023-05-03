import React from 'react';
import { Card, Container } from 'react-bootstrap';
import blog1 from '../../../assets/blog1.jpg'
import blog2 from '../../../assets/blog2.jpg'
import blog3 from '../../../assets/blog3.jpg'
import blog4 from '../../../assets/blog4.jpg'
import blog5 from '../../../assets/blog5.jpg'
import blog6 from '../../../assets/blog6.jpg'

const Blog = () => {
    return (
      <Container className=" ">
        <h2 className="text-center mb-5 mt-5">Blog</h2>
        <div className=" row justify-content-between">
          <div className="col-md-6 mb-5">
            <Card>
              <Card.Img variant="top" src={blog1} />
              <Card.Body className="text-justify">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using ‘Content
                  here, content here’, making it look like readable English.
                  Many desktop publishing packages and web page editors now use.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Img variant="top" src={blog2} />
              <Card.Body className="text-justify">
                <p>
                  Cooking Dining Experience It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as
                  opposed to using
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Img variant="top" src={blog3} />
              <Card.Body className="text-justify">
                <p>
                  The History of Kitchens and Cooks gives further intimation on
                  Mr Boulanger usual menu, stating confidently that "Boulanger
                  served salted poultry and fresh eggs, all presented without a
                  tablecloth on small marble tables". Numerous commentators have
                  also referred to the supposed restaurant owner's eccentric
                  habit of touting for custom outside his establishment, dressed
                  in aristocratic fashion and brandishing a sword
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-5">
            <Card>
              <Card.Img variant="top" src={blog4} />
              <Card.Body className="text-justify">
                <p>
                  Sed gravida nisl a porta tincidunt. Integer aliquam nisi sit
                  amet magna suscipit, fermentum mattis erat rutrum. Sed
                  suscipit libero lectus, at ullamcorper erat feugiat eu. Nam
                  posuere ultrices nibh ut sagittis. Etiam arcu turpis,
                  elementum ac nulla vel, tristique cursus libero. Fusce
                  feugiat, justo at mattis tincidunt, velit ante congue ante, et
                  lacinia metus ipsum a risus. Vivamus hendrerit porta libero
                  nec imperdiet. Praesent interdum nisl nec facilisis dapibus.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Img variant="top" src={blog5} />
              <Card.Body className="text-justify">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur. adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Img variant="top" src={blog6} />
              <Card.Body className="text-justify">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Quis autem vel eum iure
                  reprehenderit.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    );
};

export default Blog;