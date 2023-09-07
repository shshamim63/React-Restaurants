import { Card } from "react-bootstrap";

export interface MenuContext {
  title: string;
  imageUrl: string;
  context: string;
  imageAlternative: string;
}

const CardMenu = ({
  title,
  imageUrl,
  context,
  imageAlternative,
}: MenuContext) => {
  return (
    <Card className="card mr-1">
      <Card.Img src={imageUrl} alt={imageAlternative} className="menu-image" />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {context.length > 60 ? `${context.substring(0, 50)}...` : context}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardMenu;
