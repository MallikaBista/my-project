import React from "react";

const IconContainer = () => {
  const iconsData = [
    {
      iconClass: "fas fa-shipping-fast",
      title: "Free Shipping",
      subtitle: "Order over $100",
    },
    {
      iconClass: "fas fa-lock",
      title: "Secure Payment",
      subtitle: "100% secure payment",
    },
    {
      iconClass: "fas fa-redo-alt",
      title: "Easy Returns",
      subtitle: "10 days returns",
    },
    {
      iconClass: "fas fa-headset",
      title: "24/7 Support",
      subtitle: "Call us anytime",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {iconsData.slice(0, 3).map((item, index) => (
          <div key={index} className="flex items-center gap-6 py-8">
            <i className={`${item.iconClass} text-4xl text-green-600`}></i>
            <div className="content">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-base text-gray-500">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4th icon in a new row, centered */}
      <div className="mt-6 ">
        <div className="flex items-center gap-6 py-8">
          <i className={`${iconsData[3].iconClass} text-4xl text-green-600`}></i>
          <div className="content">
            <h3 className="text-2xl font-semibold text-gray-800 mb-1">
              {iconsData[3].title}
            </h3>
            <p className="text-base text-gray-500">{iconsData[3].subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconContainer;
