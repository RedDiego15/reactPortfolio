variable "env_name" {
  type        = string
  description = "Environment Name"
}

variable "sub_domain_prefix" {
  type        = string
  default     = ""
  description = "Subdomain prefix ({prefix}portfolio.com)"
}
