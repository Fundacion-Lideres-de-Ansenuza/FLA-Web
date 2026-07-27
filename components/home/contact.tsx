"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
	const { t } = useTranslation()
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
					<h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
						{t("contactSection.title")}
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						{t("contactSection.subtitle")}
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
					<Card className="shadow-xl border-0">
						<CardHeader>
							<CardTitle className="text-2xl text-gray-900">
								{t("contactSection.sendMessage")}
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
											{t("contactSection.fullName")} *
										</label>
										<Input
											id="name"
											name="name"
											type="text"
											required
											value={formData.name}
											onChange={handleChange}
											className="w-full"
											placeholder={t("contactSection.namePlaceholder")}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											{t("contactSection.email")} *
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
											{t("contactSection.organization")}
									</label>
									<Input
										id="company"
										name="company"
										type="text"
										value={formData.company}
										onChange={handleChange}
										className="w-full"
										placeholder={t("contactSection.organizationPlaceholder")}
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										{t("contactSection.message")} *
									</label>
									<Textarea
										id="message"
										name="message"
										required
										value={formData.message}
										onChange={handleChange}
										rows={5}
										className="w-full"
										placeholder={t("contactSection.messagePlaceholder")}
									/>
								</div>

								<Button
									type="submit"
									className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
								>
									<Send className="mr-2 h-5 w-5" />
									{t("contactSection.send")}
								</Button>
							</form>
						</CardContent>
					</Card>

					<div className="space-y-8">
						<div>
							<h3 className="text-2xl text-gray-900 mb-6">{t("contactSection.getInTouch")}</h3>
							<p className="text-gray-600 text-lg leading-relaxed mb-8">
								{t("contactSection.helpText")}
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Mail className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h4 className="text-gray-900 mb-1">{t("contactSection.emailUs")}</h4>
									<p className="text-gray-600">contacto@lideresdeansenuza.org</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<Phone className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h4 className="text-gray-900 mb-1">{t("contactSection.callUs")}</h4>
									<p className="text-gray-600">{t("contactSection.phonePending")}</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<MapPin className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h4 className="text-gray-900 mb-1">{t("contactSection.visitUs")}</h4>
									<p className="text-gray-600">Independencia 350</p>
									<p className="text-gray-600">Miramar de Ansenuza, Córdoba</p>
								</div>
							</div>
						</div>

						<Card className="bg-red-600 text-white border-0">
							<CardContent className="p-6">
								<h4 className="text-xl mb-2">{t("contactSection.start")}</h4>
								<p className="mb-4 opacity-90">
									{t("contactSection.startText")}
								</p>
								<Button variant="secondary" className="w-full">
									{t("contactSection.startButton")}
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	)
}
