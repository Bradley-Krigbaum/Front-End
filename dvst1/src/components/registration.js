import React, { useState } from "react";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBIcon,
	MDBBtn
} from "mdbreact";

const FormPage2 = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailHandler = e => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	const passwordHandler = e => {
		e.preventDefault();
		setPassword(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		let credentials = {
			email: email,
			password: password
		};
		localStorage.setItem("credentials", credentials);
	};

	return (
		<MDBContainer>
			<MDBRow>
				<MDBCol md="6">
					<MDBCard>
						<MDBCardBody className="mx-4">
							<div className="text-center">
								<h3 className="pink-text mb-5">
									<strong>Sign up</strong>
								</h3>
							</div>
							<form onSubmit={handleSubmit}>
								<MDBInput
									label="Your email"
									type="text"
									validate
									value={email}
									onChange={emailHandler}
								/>
								<MDBInput
									label="Your password"
									group
									type="password"
									validate
									value={password}
									onChange={passwordHandler}
								/>
								<div className="md-form pb-3">
									<div className="form-check my-4">
										<MDBInput
											label={
												<>
													Accept&nbsp;
													<a href="!#" className="blue-text">
														the Terms and Conditions
													</a>
												</>
											}
											type="checkbox"
											id="checkbox1"
										/>
									</div>
								</div>
								<MDBCol md="6" className="text-center">
									<MDBBtn
										type="submit"
										className="z-depth-1"
										color="pink"
										rounded
										block
									>
										Sign up
									</MDBBtn>
								</MDBCol>
							</form>
							<MDBRow className="d-flex align-items-center mb-4">
								<MDBCol md="6">
									<p className="font-small grey-text d-flex justify-content-end">
										Have an account?
										<a href="/login" className="blue-text ml-1">
											Log in
										</a>
									</p>
								</MDBCol>
							</MDBRow>
						</MDBCardBody>
						<div className="footer pt-3 mdb-color lighten-3">
							<MDBRow className="d-flex justify-content-center">
								<p className="font-small white-text mb-2 pt-3">
									or Sign up with
								</p>
							</MDBRow>
							<MDBRow className="mt-2 mb-3 d-flex justify-content-center">
								<a href="#!" className="fa-lg p-2 m-2 fb-ic">
									<MDBIcon
										icon="facebook-f"
										fab
										size="lg"
										className="white-text"
									></MDBIcon>
								</a>
								<a href="#!" className="fa-lg p-2 m-2 tw-ic">
									<MDBIcon
										fab
										icon="twitter"
										size="lg"
										className="white-text"
									></MDBIcon>
								</a>
								<a href="#!" className="fa-lg p-2 m-2 gplus-ic">
									<MDBIcon
										fab
										icon="google-plus-g"
										size="lg"
										className="white-text"
									></MDBIcon>
								</a>
							</MDBRow>
						</div>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default FormPage2;
