import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      // In a real application, you would store this in a database,
      // send an email notification, etc.
      
      // For now, we'll just log it to the console
      console.log("Contact form submission:", contactData);
      
      return res.status(200).json({ success: true, message: "Message received" });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
