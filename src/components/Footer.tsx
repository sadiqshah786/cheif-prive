"use client";

import {
  Images,
  footerAddressLink,
  footerPagesLink,
  socialLink,
} from "@src/constants/assetsUrls";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import TextField from "./common/TextFeild";
import Button from "./common/Button";
import style from "./style.module.css";
import { ErrorMessage, Form, Formik } from "formik";
import * as Yup from "yup";

const Footer = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <div className="py-10 bg-secondry">
      <div
        className={`${style.footer} flex justify-between  max-w-screen-2xl m-auto`}
      >
        <Image
          className="object-contain -mt-[90px]"
          width={180}
          height={180}
          src={Images.footerLogo}
          alt={Images.footerLogo}
        />
        <ul>
          <h4 className="text-primary text-lg text-gilroyBold">Address</h4>
          {footerAddressLink.map((item) => {
            return (
              <li key={item?.link} className="text-white my-3">
                <Link href={item?.link} className="flex items-center gap-2">
                  <Image
                    className="object-contain"
                    width={10}
                    height={10}
                    src={item?.icon}
                    alt={item?.icon}
                  />
                  <span>{item?.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul>
          <h4 className="text-primary text-lg  font-bold ">Links</h4>
          {footerPagesLink.map((item) => {
            return (
              <li key={item?.link} className=" text-white  my-3">
                <Link href={item?.link}>{item?.title}</Link>
              </li>
            );
          })}
        </ul>
        <div>
          <div>
            <h4 className="text-primary text-lg  font-bold">
              Subcribe to Newsletter
            </h4>
            <div className="flex gap-2 items-center my-2">
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema} // Pass the validation schema
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="relative flex items-center">
                      <div>
                        <TextField
                          type="email"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          className={
                            errors.email && touched.email ? "error" : ""
                          }
                        />
                      </div>
                      <Button isType="submit" icon={Images.buttonIcon} />
                    </div>
                    <div className="absolute">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error text-error"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            <div className="my-10">
              <h4 className="text-white text-lg font-bold">Our Social</h4>
              <ul className="flex gap-4">
                {socialLink.map((item) => {
                  return (
                    <li key={item?.link} className=" text-white  my-3">
                      <Link href={item?.link}>
                        <Image
                          width={25}
                          height={25}
                          src={item?.icon}
                          alt={item?.icon}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
