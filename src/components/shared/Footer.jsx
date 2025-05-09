import React from "react";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-16 flex">
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Food Delivery</a>
        <a className="link link-hover">Pickup Orders</a>
        <a className="link link-hover">Subscription Plans</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}
