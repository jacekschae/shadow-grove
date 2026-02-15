(ns shadow.grove.ui.toggle
  (:require
    [shadow.grove :as sg :refer (<< defc css)]))

(def $base
  (css :inline-flex :items-center :justify-center
    {:border-radius "var(--ui-radius)"
     :font-size "14px"
     :font-weight "500"
     :transition "background-color 150ms, color 150ms"
     :cursor "pointer"
     :border "none"
     :outline "none"
     :background-color "transparent"
     :color "hsl(var(--ui-foreground))"}
    ["&:hover" {:background-color "hsl(var(--ui-muted))"
                :color "hsl(var(--ui-muted-foreground))"}]
    ["&:focus-visible" {:outline "2px solid hsl(var(--ui-ring))"
                        :outline-offset "2px"}]
    ["&:disabled" {:opacity "0.5"
                   :pointer-events "none"}]
    ["&[data-state=\"on\"]" {:background-color "hsl(var(--ui-accent))"
                             :color "hsl(var(--ui-accent-foreground))"}]))

(def $outline
  (css {:border "1px solid hsl(var(--ui-input))"}
    ["&[data-state=\"on\"]" {:border-color "hsl(var(--ui-accent))"}]))

(def variant-map
  {:default nil
   :outline $outline})

(def $size-default
  (css {:height "40px"
        :padding "8px 12px"}))

(def $size-sm
  (css {:height "36px"
        :padding "6px 10px"
        :font-size "13px"}))

(def $size-lg
  (css {:height "44px"
        :padding "8px 20px"}))

(def size-map
  {:default $size-default
   :sm $size-sm
   :lg $size-lg})

(defc toggle [opts body]
  (bind {:keys [pressed on-change variant size disabled class]
          :or {variant :default
               size :default
               pressed false}} opts)

  (event ::press! [env ev e]
    (when on-change
      (on-change (not pressed))))

  (render
    (<< [:button {:class [$base
                          (get variant-map variant)
                          (get size-map size $size-default)
                          class]
                  :type "button"
                  :aria-pressed (str (boolean pressed))
                  :data-state (if pressed "on" "off")
                  :disabled disabled
                  :on-click ::press!}
         body])))
