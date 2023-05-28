import { NotificationContainer, Title, Text } from "./styled";

const Notification = ({ title, message, status }: Record<string, string>) => {
  const styledClasses = `${status}`;

  return (
    <NotificationContainer className={styledClasses}>
      <Title>{title}</Title>
      <Text>{message}</Text>
    </NotificationContainer>
  );
};

export default Notification;
