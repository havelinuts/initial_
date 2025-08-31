import React from "react";
import { FaDolly, FaShuttleVan } from "react-icons/fa";
import "./ServicePage.css";

const ServicePage = () => (
  <div className="services-section">
    <div className="service-card">
      <div className="service-icon service-icon-yellow">
        <FaDolly size={48} />
      </div>
      <h3 className="service-title service-title-yellow">Import Export</h3>
      <p className="service-desc">
        Mudra Global is involved in the import export of variety of food and commodity around the world.
      </p>
    </div>
    <div className="service-card">
      <div className="service-icon service-icon-green">
        <FaShuttleVan size={48} />
      </div>
      <h3 className="service-title service-title-green">Products Distribution</h3>
      <p className="service-desc">
        Mudra Global also assist Businesses in worldwide purchasing, delivery and analysis of commodity valuation.
      </p>
    </div>
  </div>
);

export default ServicePage;