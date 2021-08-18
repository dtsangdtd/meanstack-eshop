import { User } from '@bluebits/users';
import { OrderItem } from './orderItem';

export class Order {
  id?: string;
  orderItems?: OrderItem[];
  shippingAddress1?: string;
  shippingAddress2?: string;
  city?: string;
  zip?: string;
  country?: string;
  phone?: string;
  totalPrice?: string;
  status?: number;
  user?: any;
  dateOrdered?: string;
}
