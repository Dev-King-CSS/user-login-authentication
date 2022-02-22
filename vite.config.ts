import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
//! Type
import { PluginOption } from "vite"

const plugins: PluginOption[][] = [react()]

export default defineConfig({ plugins })
