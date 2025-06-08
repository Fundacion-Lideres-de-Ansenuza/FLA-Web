"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Form submitted:", formData)
		setFormData({ name: "", email: "", company: "", message: "" })
		alert("Thank you for your message! We'll get back to you soon.")
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Ready to Get Started?
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Contact us today and discover how our platform can transform your business. Our team
						is ready to help you succeed.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<Card className="shadow-xl border-0">
						<CardHeader>
							<CardTitle className="text-2xl text-gray-900">
								Send us a message
							</CardTitle>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid md:grid-cols-2 gap-4">
									<div>
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Full Name *
										</label>
										<Input
											id="name"
											name="name"
											type="text"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full"
											placeholder="John Doe"
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Email Address *
										</label>
										<Input
											id="email"
											name="email"
											type="email"
											required
											value={formData.email}
											onChange={handleChange}
											className="w-full"
											placeholder="john@company.com"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="company"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Company Name
									</label>
									<Input
										id="company"
										name="company"
										type="text"
										value={formData.company}
										onChange={handleChange}
										className="w-full"
										placeholder="Your Company"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Message *
									</label>
									<Textarea
										id="message"
										name="message"
										required
										value={formData.message}
										onChange={handleChange}
										rows={5}
										className="w-full"
										placeholder="Tell us about your project and how we can help..."
									/>
								</div>

								<Button
									type="submit"
									className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
								>
									<Send className="mr-2 h-5 w-5" />
									Send Message
								</Button>
							</form>
						</CardContent>
					</Card>

					<div className="space-y-8">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
							<p className="text-gray-600 text-lg leading-relaxed mb-8">
								We&apos;re here to help and answer any question you might have. We look
								forward to hearing from you.
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Mail className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
									<p className="text-gray-600">hello@company.com</p>
									<p className="text-gray-600">support@company.com</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Phone className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
									<p className="text-gray-600">+1 (555) 123-4567</p>
									<p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<MapPin className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
									<p className="text-gray-600">123 Business Ave</p>
									<p className="text-gray-600">New York, NY 10001</p>
								</div>
							</div>
						</div>

						<Card className="bg-red-600 text-white border-0">
							<CardContent className="p-6">
								<h4 className="text-xl font-bold mb-2">Ready to start?</h4>
								<p className="mb-4 opacity-90">
									Join thousands of satisfied customers and transform your business today.
								</p>
								<Button variant="secondary" className="w-full">
									Start Free Trial
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
