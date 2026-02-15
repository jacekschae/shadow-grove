(ns shadow.grove.ui.button
  (:require
    [shadow.grove :as sg :refer (<< css)]))

(def $base
  (css :inline-flex :items-center :justify-center
    {:border-radius "var(--ui-radius)"
     :font-size "14px"
     :font-weight "500"
     :line-height "20px"
     :white-space "nowrap"
     :transition "background-color 150ms, color 150ms, border-color 150ms"
     :cursor "pointer"
     :border "1px solid transparent"
     :outline "none"}
    ["&:focus-visible" {:outline "2px solid hsl(var(--ui-ring))"
                        :outline-offset "2px"}]
    ["&:disabled" {:opacity "0.5"
                   :pointer-events "none"}]))

(def $default
  (css {:background-color "hsl(var(--ui-primary))"
        :color "hsl(var(--ui-primary-foreground))"}
    ["&:hover" {:opacity "0.9"}]))

(def $destructive
  (css {:background-color "hsl(var(--ui-destructive))"
        :color "hsl(var(--ui-destructive-foreground))"}
    ["&:hover" {:opacity "0.9"}]))

(def $outline
  (css {:background-color "transparent"
        :border-color "hsl(var(--ui-input))"
        :color "hsl(var(--ui-foreground))"}
    ["&:hover" {:background-color "hsl(var(--ui-accent))"
                :color "hsl(var(--ui-accent-foreground))"}]))

(def $secondary
  (css {:background-color "hsl(var(--ui-secondary))"
        :color "hsl(var(--ui-secondary-foreground))"}
    ["&:hover" {:opacity "0.8"}]))

(def $ghost
  (css {:background-color "transparent"
        :color "hsl(var(--ui-foreground))"}
    ["&:hover" {:background-color "hsl(var(--ui-accent))"
                :color "hsl(var(--ui-accent-foreground))"}]))

(def $link
  (css {:background-color "transparent"
        :color "hsl(var(--ui-primary))"
        :text-decoration "underline"
        :text-underline-offset "4px"}
    ["&:hover" {:text-decoration "underline"}]))

(def variant-map
  {:default $default
   :destructive $destructive
   :outline $outline
   :secondary $secondary
   :ghost $ghost
   :link $link})

(def $size-default
  (css {:height "40px"
        :padding "8px 16px"}))

(def $size-sm
  (css {:height "36px"
        :padding "6px 12px"
        :font-size "13px"}))

(def $size-lg
  (css {:height "44px"
        :padding "8px 32px"}))

(def $size-icon
  (css {:height "40px"
        :width "40px"
        :padding "0"}))

(def size-map
  {:default $size-default
   :sm $size-sm
   :lg $size-lg
   :icon $size-icon})

(defn button [opts body]
  (let [{:keys [variant size class disabled on-click type]
         :or {variant :default
              size :default}} opts]
    (<< [:button {:class [$base
                          (get variant-map variant $default)
                          (get size-map size $size-default)
                          class]
                  :disabled disabled
                  :type type
                  :on-click on-click}
         body])))
