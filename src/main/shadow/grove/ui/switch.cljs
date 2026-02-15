(ns shadow.grove.ui.switch
  (:require
    [shadow.grove :as sg :refer (<< defc css)]))

(def $track
  (css :inline-flex :items-center
    {:width "44px"
     :height "24px"
     :border-radius "9999px"
     :border "2px solid transparent"
     :cursor "pointer"
     :transition "background-color 150ms"
     :padding "0"
     :outline "none"
     :background-color "hsl(var(--ui-input))"}
    ["&:focus-visible" {:outline "2px solid hsl(var(--ui-ring))"
                        :outline-offset "2px"}]
    ["&:disabled" {:opacity "0.5"
                   :pointer-events "none"
                   :cursor "not-allowed"}]
    ["&[data-state=\"checked\"]" {:background-color "hsl(var(--ui-primary))"}]))

(def $thumb
  (css {:display "block"
        :width "20px"
        :height "20px"
        :border-radius "9999px"
        :background-color "hsl(var(--ui-background))"
        :box-shadow "0 1px 3px rgba(0,0,0,0.1)"
        :transition "transform 150ms"
        :transform "translateX(0px)"}))

(def $thumb-checked
  (css {:transform "translateX(20px)"}))

(defc ui-switch [opts]
  (bind {:keys [checked on-change disabled id class]
          :or {checked false}} opts)

  (event ::toggle! [env ev e]
    (when on-change
      (on-change (not checked))))

  (render
    (<< [:button {:class [$track class]
                  :type "button"
                  :role "switch"
                  :id id
                  :aria-checked (str (boolean checked))
                  :data-state (if checked "checked" "unchecked")
                  :disabled disabled
                  :on-click ::toggle!}
         [:span {:class [$thumb (when checked $thumb-checked)]}]])))
