import React from "react";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import { GetServerSideProps } from "next";
import connectDB from "@/config/database";
import Property from "@/models/Property";

async function getData() {
  await connectDB();

  return Property.find();
}
const PropertiesPage = async () => {
  const properties = await getData();
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties && properties.length === 0 ? (
          <p>No properties found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
