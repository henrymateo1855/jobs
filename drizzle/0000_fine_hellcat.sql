CREATE TABLE "applicant" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"first_name" varchar NOT NULL,
	"last_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone" varchar NOT NULL,
	"dob" varchar NOT NULL,
	"location" varchar NOT NULL,
	"device" varchar NOT NULL,
	"internet" varchar NOT NULL,
	"availability" varchar NOT NULL,
	"experience" varchar NOT NULL,
	"s3_url" varchar NOT NULL
);
