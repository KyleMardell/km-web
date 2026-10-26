"use client";

import { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import ContactAOS from "./ContactAOS";
import styles from "./ContactPage.module.css";

function validateContact({ name, email, phone, requestCallback }) {
    const errors = {};
    const emailValue = email.trim();
    const phoneValue = phone.trim();
    if (!name.trim()) errors.name = "Please enter your name.";
    if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        errors.email = "Please enter a valid email address.";
    }
    if (phoneValue) {
        const digits = phoneValue.replace(/\D/g, "");
        if (!/^\+?[\d\s().-]+$/.test(phoneValue) || digits.length < 7 || digits.length > 15) {
            errors.phone = "Please enter a valid phone number. Spaces, brackets, hyphens and a leading + are accepted.";
        }
    }
    if (!emailValue && !phoneValue) {
        errors.email = "Please provide an email address or phone number.";
        errors.phone = "Please provide a phone number or email address.";
    }
    if (requestCallback && !phoneValue) errors.phone = "Please enter a phone number to request a call back.";
    return errors;
}

export default function ContactPage() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [requestCallback, setRequestCallback] = useState(false);
    const [attempted, setAttempted] = useState(false);
    const [sending, setSending] = useState(false);
    const [status, setStatus] = useState({ kind: "idle", text: "" });
    const formRef = useRef(null);
    const sendingRef = useRef(false);
    const values = { name, email, phone, requestCallback };
    const errors = attempted ? validateContact(values) : {};

    const update = (setter, value) => {
        setter(value);
        setStatus({ kind: "idle", text: "" });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (sendingRef.current) return;
        const validationErrors = validateContact(values);
        setAttempted(true);
        if (Object.keys(validationErrors).length) {
            setStatus({ kind: "validation", text: "Please check the highlighted fields below." });
            const firstField = Object.keys(validationErrors)[0];
            requestAnimationFrame(() => formRef.current?.elements.namedItem(firstField)?.focus());
            return;
        }
        const formData = {
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            message,
            requestCallback: requestCallback ? "Yes" : "No",
        };
        sendingRef.current = true;
        setSending(true);
        setStatus({ kind: "sending", text: "Sending your enquiry..." });
        try {
            const result = await emailjs.send(
                "service_ctinitc",
                "template_alsk32e",
                formData,
                "AB1Q3v3G9VUxrcl5Y",
            );
            if (result.status !== 200) throw new Error("Submission was not confirmed");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setRequestCallback(false);
            setAttempted(false);
            setStatus({ kind: "success", text: "Thank you! Your enquiry has been sent." });
        } catch {
            setStatus({ kind: "failure", text: "Your enquiry could not be sent. Please try again, or contact me using the email address or phone number on this page. Your details have been kept in the form." });
        } finally {
            sendingRef.current = false;
            setSending(false);
        }
    };

    return (
        <div className={styles.contactPage} data-contact-content>
            <section className={styles.intro} aria-labelledby="contact-heading">
                <div className="container" data-aos="fade-up" data-aos-offset="0">
                    <p className={styles.eyebrow}>Let&apos;s talk about your website</p>
                    <h1 id="contact-heading">Contact Me</h1>
                    <p>If you&apos;re thinking about a website, whether it&apos;s your first one, a refresh, or just an idea you want to talk through, feel free to get in touch or request a call back.</p>
                    <p>Ask about the &pound;39/month website package or tell me about a larger project.</p>
                </div>
            </section>
            <section className={styles.contactSection} aria-labelledby="form-heading">
                <div className={"container " + styles.contactGrid}>
                    <aside className={"surface-dark " + styles.contactDetails} aria-labelledby="direct-heading" data-aos="fade-right">
                        <p className={styles.eyebrow}>A conversation to get started</p>
                        <h2 id="direct-heading">Prefer to contact me directly?</h2>
                        <dl className={styles.detailsList}>
                            <dt>Email:</dt>
                            <dd><a href="mailto:kyle@kmweb.co.uk">kyle@kmweb.co.uk</a></dd>
                            <dt>Phone/Text:</dt>
                            <dd><a href="tel:07766082304">07766 082304</a></dd>
                        </dl>
                        <p>You can also use the form to request a call back. Just include your phone number and select the callback option.</p>
                        <p className={styles.detailsNote}>No pressure, just a conversation about what you need.</p>
                    </aside>
                    <div className={styles.formCard} data-aos="fade-left">
                        <h2 id="form-heading">Contact Form</h2>
                        <p>Get in touch or request a call back.</p>
                        <p id="contactMethodHelp" className={styles.helpText}>Name and at least one contact method are required. A phone number is needed for a call back. Message is optional.</p>
                        <noscript><p>The form needs JavaScript to send an enquiry. You can use the email or phone links to contact me directly.</p></noscript>
                        <Form ref={formRef} noValidate onSubmit={handleSubmit} aria-describedby="contactMethodHelp">
                            <div id="formStatus" className={styles.status} data-status={status.kind} role="status" aria-live="polite" aria-atomic="true">
                                {status.text}
                                {status.kind === "failure" && <> <a href="mailto:kyle@kmweb.co.uk">Email me directly</a>.</>}
                            </div>
                            <fieldset disabled={sending} aria-busy={sending} className={styles.fields}>
                                <div className={styles.formGrid}>
                                    <Form.Group controlId="formName" className={styles.fullWidth}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control name="name" type="text" autoComplete="name" placeholder="Enter your name" value={name} onChange={(e) => update(setName, e.target.value)} required isInvalid={Boolean(errors.name)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "formNameError" : undefined} />
                                        {errors.name && <Form.Control.Feedback type="invalid" id="formNameError">{errors.name}</Form.Control.Feedback>}
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control name="email" type="email" autoComplete="email" inputMode="email" placeholder="Enter email" value={email} onChange={(e) => update(setEmail, e.target.value)} isInvalid={Boolean(errors.email)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contactMethodHelp formEmailError" : "contactMethodHelp"} />
                                        {errors.email && <Form.Control.Feedback type="invalid" id="formEmailError">{errors.email}</Form.Control.Feedback>}
                                    </Form.Group>
                                    <Form.Group controlId="formPhone">
                                        <Form.Label>Phone {requestCallback ? "(Required for callback)" : ""}</Form.Label>
                                        <Form.Control name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="Enter phone number" value={phone} onChange={(e) => update(setPhone, e.target.value)} required={requestCallback} isInvalid={Boolean(errors.phone)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "contactMethodHelp formPhoneError" : "contactMethodHelp"} />
                                        {errors.phone && <Form.Control.Feedback type="invalid" id="formPhoneError">{errors.phone}</Form.Control.Feedback>}
                                    </Form.Group>
                                    <Form.Group controlId="formMessage" className={styles.fullWidth}>
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control name="message" as="textarea" rows={5} placeholder="Enter your message" value={message} onChange={(e) => update(setMessage, e.target.value)} />
                                    </Form.Group>
                                </div>
                                <Form.Group controlId="formCallback" className={styles.callback}>
                                    <Form.Check name="requestCallback" id="formCallback" type="checkbox" label="Request a Call Back" checked={requestCallback} onChange={(e) => update(setRequestCallback, e.target.checked)} aria-describedby="contactMethodHelp" />
                                </Form.Group>
                                <Button variant="primary" type="submit" disabled={sending} className={styles.submitButton}>{sending ? "Sending..." : "Submit"}</Button>
                            </fieldset>
                            <p className={styles.privacyNote}>By sending this form, you agree to my <Link href="/privacy/">Privacy Policy</Link>.</p>
                        </Form>
                    </div>
                </div>
            </section>
            <ContactAOS />
        </div>
    );
}