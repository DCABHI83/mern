import React, { useState, useEffect } from 'react';
import '../../Stylesheets/services.css';
import service from "../../assets/service.png";
import { useAuth } from '../../store/auth';
import { motion } from 'framer-motion';

const Services = () => {
  const [getData, setGetData] = useState([]);
  const { servicedata } = useAuth();

  useEffect(() => {
    if (servicedata) {
      setGetData(servicedata);
    }
  }, [servicedata]);

  return (
    <div className="service-container">
      <div className="cards">
        {getData?.map((curElem) => (
          <motion.div
            className="card"
            key={curElem._id || curElem.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
          >
            <img className="service-image" src={service} alt="service" />
            <div className="text-price">
              <p className="text">{curElem.provider}</p>
              <p className="price">{curElem.price}</p>
              <h2 className="heading">{curElem.service}</h2>
              <p className="description">{curElem.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
