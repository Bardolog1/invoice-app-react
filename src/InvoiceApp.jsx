import React, { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import InvoiceView from "./components/InvoiceView";
import ClientView from "./components/ClientView";
import CompanyView from "./components/CompanyView";
import ProductsView from "./components/ProductsView";
import TotalView from "./components/TotalView";
import FormNewItem from "./components/FormNewItem";

const skeletonInvoice = {

  id: 0,
  name: '',
  client: {
      name: '',
      lastname: '',
      address: {
          country: '',
          city: '',
          street: '',
          number: 0,
      },
      phone: '',
  },
  company: {
      name: '',
      fiscalId: '',
  },
  items: []

}

export const InvoiceApp = () => {
  const [invoice, setInvoice] = useState(skeletonInvoice);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [activeForm, setActiveForm] = useState(false);
  
  const { id, name, client, company } = invoice;
  

  //los useEffect se ejecutan despues de que el componente se 
  //renderiza, pero tambien se ejecutan cuando las dependencias 
  //cambian, las dependencias son las que estan dentro del array 
  //que se le pasa como segundo parametro al hook 


  useEffect(() => {
    const data = getInvoice();
    setInvoice(data);
    setItems(data.items);
    setCount(data.items.length);
  }, []);

  useEffect(() => {
      setTotal(calculateTotal(items));
  }, [items]);

  const handleAddItem = ({product, price, quantity})=>{
    setItems([
      ...items,
      {
        id: count+1,
        name: product.trim(),
        price: parseInt(price.trim(), 10),
        quantity: parseInt(quantity.trim(), 10),
      },
    ]);
    setCount(count + 1);
  }

  const handleDeleteItem = (id)=>{
    setItems(items.filter(item=>item.id !== id));
  }

  const handleActiveForm = ()=>{
    setActiveForm(!activeForm);
  }





  return (
    <>
      <div className="container">
        <div className="card my-5">
          <div className="card-header">Invoice Detail</div>
          <div className="card-body">
            <InvoiceView id={id} invoiceName={name}></InvoiceView>
            <div className="row my-3">
              <div className="col-6">
                <ClientView client={client}></ClientView>
              </div>
              <div className="col-6">
                <CompanyView company={company}></CompanyView>
              </div>
            </div>
            <ProductsView items={items} handleDelete={handleDeleteItem}></ProductsView>
            <TotalView total={total}></TotalView>
            <button className="btn btn-primary"
            onClick={handleActiveForm}
            >{activeForm? 'Hide Form': 'Add Product'}</button>
             
            {
              !activeForm || <FormNewItem handler={handleAddItem}></FormNewItem>
            }
          </div>
        </div>
      </div>
    </>
  );
};
