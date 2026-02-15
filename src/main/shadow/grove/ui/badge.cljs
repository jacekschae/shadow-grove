(ns shadow.grove.ui.badge
  (:require
    [shadow.grove :as sg :refer (<< css)]))

(def $base
  (css :inline-flex :items-center
    {:border-radius "9999px"
     :padding "2px 10px"
     :font-size "12px"
     :font-weight "600"
     :line-height "20px"
     :transition "colors 150ms"
     :white-space "nowrap"
     :border "1px solid transparent"}))

(def $default
  (css {:background-color "hsl(var(--ui-primary))"
        :color "hsl(var(--ui-primary-foreground))"}))

(def $secondary
  (css {:background-color "hsl(var(--ui-secondary))"
        :color "hsl(var(--ui-secondary-foreground))"}))

(def $destructive
  (css {:background-color "hsl(var(--ui-destructive))"
        :color "hsl(var(--ui-destructive-foreground))"}))

(def $outline
  (css {:background-color "transparent"
        :color "hsl(var(--ui-foreground))"
        :border-color "hsl(var(--ui-border))"}))

(def variant-map
  {:default $default
   :secondary $secondary
   :destructive $destructive
   :outline $outline})

(defn badge [opts body]
  (let [{:keys [variant class]
         :or {variant :default}} opts]
    (<< [:div {:class [$base (get variant-map variant $default) class]}
         body])))
