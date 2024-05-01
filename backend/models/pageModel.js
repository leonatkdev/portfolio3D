const mongoose = require("mongoose");

const { Schema } = mongoose;

const seoSchema = new Schema({
  title: { type: String },
  description: { type: String },
  image: String,
  keywords: [String],
  // slug: { type: String },
  robots: String,
  canonicalURL: String,
  author: String,

  // Open Graph (Facebook) fields
  ogTitle: { type: String, default: function() { return this.title; } },
  ogDescription: { type: String, default: function() { return this.description; } },
  ogImage: { type: String, default: function() { return this.image; } },
  ogType: String, // type of object, e.g., website, article, etc.
  ogUrl: { type: String, default: function() { return this.canonicalURL; } },

  // Twitter Card fields
  twitterTitle: { type: String, default: function() { return this.title; } },
  twitterDescription: { type: String, default: function() { return this.description; } },
  twitterImage: { type: String, default: function() { return this.image; } },
  twitterCard: { type: String, default: 'summary_large_image' } // or "summary" etc.
})

// const codeInjectionSchema = new Schema({ 

// })

const PageSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    path: {
      type: String,
      trim: true, // removes whitespace from both ends of a string
      unique: true,
      required: true,
    },
    status: {
      type: [String],
      enum: ["Active", "Inactive", "Draft", "Published"],
      default: 'Draft'
    },
    authID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    seo: seoSchema ,
    manualDate: {
      type: Date,
    },
    modules: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const PageModel = mongoose.model("PageModel", PageSchema);

module.exports = PageModel;
