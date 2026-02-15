(ns shadow.grove.ui.dialog
  (:require
    [shadow.grove :as sg :refer (<< defc css)]))

(def $overlay
  (css {:position "fixed"
        :top "0"
        :left "0"
        :right "0"
        :bottom "0"
        :z-index "50"
        :background-color "rgba(0, 0, 0, 0.5)"
        :display "flex"
        :align-items "center"
        :justify-content "center"}))

(def $panel
  (css {:position "relative"
        :z-index "50"
        :width "100%"
        :max-width "512px"
        :max-height "85vh"
        :overflow-y "auto"
        :border-radius "var(--ui-radius)"
        :border "1px solid hsl(var(--ui-border))"
        :background-color "hsl(var(--ui-background))"
        :color "hsl(var(--ui-foreground))"
        :padding "24px"
        :box-shadow "0 25px 50px -12px rgba(0,0,0,0.25)"}))

(def $close-button
  (css {:position "absolute"
        :top "16px"
        :right "16px"
        :width "24px"
        :height "24px"
        :display "inline-flex"
        :align-items "center"
        :justify-content "center"
        :border-radius "var(--ui-radius)"
        :border "none"
        :background-color "transparent"
        :color "hsl(var(--ui-muted-foreground))"
        :cursor "pointer"
        :font-size "16px"
        :outline "none"
        :opacity "0.7"
        :transition "opacity 150ms"}
    ["&:hover" {:opacity "1"}]
    ["&:focus-visible" {:outline "2px solid hsl(var(--ui-ring))"
                        :outline-offset "2px"}]))

(def $header
  (css :flex :flex-col
    {:gap "6px"
     :text-align "center"}))

(def $title
  (css {:font-size "18px"
        :font-weight "600"
        :line-height "1"}))

(def $description
  (css {:font-size "14px"
        :color "hsl(var(--ui-muted-foreground))"}))

(def $footer
  (css :flex :justify-end
    {:gap "8px"
     :margin-top "16px"}))

(defc dialog [opts body]
  (bind {:keys [open on-close]} opts)

  (event ::close! [env ev e]
    (when on-close
      (on-close)))

  (event ::overlay-click! [env ev e]
    (when (= (.-target e) (.-currentTarget e))
      (when on-close
        (on-close))))

  (effect open [env]
    (when open
      (let [handler (fn [e]
                      (when (= "Escape" (.-key e))
                        (when on-close
                          (on-close))))]
        (js/document.addEventListener "keydown" handler)
        #(js/document.removeEventListener "keydown" handler))))

  (render
    (when open
      (sg/portal
        (<< [:div {:class $overlay
                   :on-click ::overlay-click!}
             [:div {:class $panel
                    :role "dialog"
                    :aria-modal "true"}
              [:button {:class $close-button
                        :on-click ::close!
                        :aria-label "Close"}
               "\u00D7"]
              body]])))))

(defn dialog-header [opts body]
  (<< [:div {:class [$header (:class opts)]}
       body]))

(defn dialog-title [opts body]
  (<< [:h2 {:class [$title (:class opts)]}
       body]))

(defn dialog-description [opts body]
  (<< [:p {:class [$description (:class opts)]}
       body]))

(defn dialog-footer [opts body]
  (<< [:div {:class [$footer (:class opts)]}
       body]))
